/**
 * @file storage getter
 * @author lijianan
 * @date 2020/9/18
 * @use stroage.getter({type, name, item, value});
 */

function isError(config, props) {
  config.forEach(i => {
    if(!props[i]) {
      throw Error(`no parameters ${i}`);
    }
  });
}

function getter(props = {}) {
  isError(['type', 'name'], props);
  let { type, name, item = ''} = props;
  const session = type === 'session' ? sessionStorage : localStorage;
  if (item) {
    const params = JSON.parse(session.getItem(name));
    return params[item];
  }
  return session.getItem(name);
}

function setter(props = {}) {
  isError(['type', 'name', 'value'], props);
  let { type, name, item = '', value} = props;
  const session = type === 'session' ? sessionStorage : localStorage;
  if (item) {
    const params = JSON.parse(session.getItem(name)) || {};
    params[item] = value;
    session.setItem(name, JSON.stringify(params));
  } else {
    session.setItem(name, value);
  }
}

function remove(props = {}) {
  isError(['type', 'name'], props);
  let { type, name, item = ''} = props;
  const session = type === 'session' ? sessionStorage : localStorage;
  if (item) {
    const params = JSON.parse(session.getItem(name));
    if (params) {
      delete params[item];
      session.setItem(name, JSON.stringify(params));
    }
  } else {
    session.removeItem(name);
  }
}

function clear(props = {}) {
  isError(['type'], props);
  const { type } = props;
  const session = type === 'session' ? sessionStorage : localStorage;
  session.clear();
}

export default {
  getter,
  setter,
  remove,
  clear
}
