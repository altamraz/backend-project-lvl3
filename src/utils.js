import axios from 'axios';
import 'axios-debug-log';
import debug from 'debug';

debug('booting %o', 'page-loader');

export const fetchPage = (path) => {
  debug(`fetch file from ${path}`);
  return axios.get(path)
    .then((response) => {
      debug(`success fetch file ${response.status}`);
      return response.data;
    })
    .catch((err) => {
      debug(`fetch error ${err}`);
      console.error(err);
    });
};

export const getCurrentPath = (path) => {
  let name;
  if (path.includes('://')) {
    name = path.split('://')['1'];
  } else {
    name = path;
  }
  const curName = name.replace(/([.\/])/gi, '-');

  return curName;
}

// export const fetchResourse = (path, name) => {
//   debug(`fetch resource from ${path}`);

//   return axios({
//     method: 'get',
//     url: path,
//     responseType: 'stream',
//   })
//     .then((response) => {
//       // debug(`success fetch resource ${response.status}`);
//       // return response.data.pipe(fs.createWriteStream(name))
//     })
//     .catch(() => {
//       // debug(`fetch error ${err}`);
//       // console.error(err);
//       // exit(1);
//     });
// };
