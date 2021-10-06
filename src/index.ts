import NodeMediaServer from 'node-media-server'
import { configs } from './configs/environment'

// const config = {
//   rtmp: {
//     port: configs.SERVER_STREAM,
//     chunk_size: 60000,
//     gop_cache: true,
//     ping: 30,
//     ping_timeout: 60
//   },
//   http: {
//     port: configs.SERVER_MEDIA,
//     mediaroot: './media',
//     allow_origin: '*'
//   },
//   trans: {
//     ffmpeg: path.join(__dirname, './libs/ffmpeg'),
//     tasks: [
//       {
//         app: 'live',
//         hls: true,
//         hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
//         dash: true,
//         dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
//       }
//     ]
//   }
// }

const config = {
  rtmp: {
    port: configs.SERVER_STREAM,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
    // ssl: {
    //   port: 443,
    //   key: __dirname+'/privatekey.pem',
    //   cert: __dirname+'/certificate.pem',
    // }
  },
  http: {
    port: configs.SERVER_MEDIA,
    mediaroot: __dirname + '/media',
    webroot: __dirname + '/www',
    allow_origin: '*',
    api: true
  }
  // https: {
  //   port: argv.https_port,
  //   key: __dirname+'/privatekey.pem',
  //   cert: __dirname+'/certificate.pem',
  // },
  // auth: {
  //   api: true,
  //   api_user: 'admin',
  //   api_pass: 'admin',
  //   play: false,
  //   publish: false,
  //   secret: 'nodemedia2017privatekey'
  // }
}

const nms = new NodeMediaServer(config)
nms.run()

nms.on('preConnect', (id: string, args: any) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`)
  // let session = nms.getSession(id);
  // session.reject();
})

nms.on('postConnect', (id: string, args: any) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`)
})

nms.on('doneConnect', (id: string, args: any) => {
  console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`)
})

nms.on('prePublish', (id: string, StreamPath: string, args: any) => {
  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`)
})

nms.on('postPublish', (id: string, StreamPath: string, args: any) => {
  console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`)
})

nms.on('donePublish', (id: string, StreamPath: string, args: any) => {
  console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`)
})

nms.on('prePlay', (id: string, StreamPath: string, args: any) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`)
  // let session = nms.getSession(id);
  // session.reject();
})

nms.on('postPlay', (id: string, StreamPath: string, args: any) => {
  console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`)
})

nms.on('donePlay', (id: string, StreamPath: string, args: any) => {
  console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`)
})
