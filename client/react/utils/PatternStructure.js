/* eslint-disable */

export const patternReducerStructure = {
  id: '',
  name: '',
  type: '',
  'context.description': '',
  forces: '',
  problem: '',
  'init_state.description': '',
  'end_state.description': '',
  'solution_layer.type': '',
  'solution_layer.solution': '',
}

export const unflatten = (data) => {
  const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g
  const resultholder = {}
  if (Object(data) !== data || Array.isArray(data)) {
    return data
  }
  for (let p in data) {
    let cur = resultholder
    let prop = ''
    let m
    while (m = regex.exec(p)) {
      cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}))
      prop = m[2] || m[1]
    }
    cur[prop] = data[p]
  }
  return resultholder[''] || resultholder
};

export const flatten = (data) => {
  var result = {}
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
       for(let i=0, l=cur.length; i<l; i++)
         recurse(cur[i], prop + '[' + i + ']');
      if (l == 0)
        result[prop] = []
    } else {
      var isEmpty = true
      for (let p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop+'.'+p : p);
      }
      if (isEmpty && prop)
        result[prop] = {}
    }
  }
  recurse(data, '')
  return result
}
