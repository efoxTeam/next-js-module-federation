import {Writable} from 'stream'
import path from 'path'
import crypto from 'crypto'
import {Buffer} from 'buffer'
import vm from 'vm'
import {useEffect, useState} from 'react'

export default function NodeBrowserPolyfillPage({code}: {code: string}) {
  const [state, setState]: any = useState({})
  useEffect(() => {
    let closedStream = false

    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback()
      },
    })

    writable.on('finish', () => {
      closedStream = true
    })

    writable.end()

    setState({
      path: path.join('/hello/world', 'test.txt'),
      hash: crypto.createHash('sha256').update('hello world').digest('hex'),
      buffer: Buffer.from('hello world').toString('utf8'),
      vm: vm.runInNewContext('a + 5', {a: 100}),
      staticHost: vm.runInNewContext(code, {staticHost: 1}),
      stream: closedStream,
    })
  }, [])

  //   useEffect(() => {
  //     ;(async () => {
  //       vm.runInNewContext(code, {staticHost: 1})
  //     })()
  //   }, [])

  useEffect(() => {
    if (state.vm) {
      ;(window as any).didRender = true
    }
  }, [state])

  return (
    <>
      <div id="node-browser-polyfills" dangerouslySetInnerHTML={{__html: JSON.stringify(state)}}></div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const url = 'http://localhost:3003/emp.js'
  let code = await fetch(url).then(res => res.text())
  code = code.replace('var staticHost;', '')

  return {
    props: {code}, // will be passed to the page component as props
  }
}
