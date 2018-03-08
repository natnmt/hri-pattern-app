/* eslint-disable */
export const patternHFReducerStructure = {
  'solution_layer.solutions.human_factors.description': '',
  'solution_layer.solutions.human_factors.end_state.description': '',
}

export const patternSolutionReducerStructure = {
  'solution_layer.solutions.description': '',
  'solution_layer.solutions.solution': '',
  /*'solution_layer.solutions.human_factors': [{
    'solution_layer.solutions.human_factors.description': '122',
    'solution_layer.solutions.human_factors.end_state.description': 'abc',
  }],*/
  'solution_layer.solutions.end_state.description': '',
}

export const patternReducerStructure = {
  name: '',
  type: '',
  problem: '',
  'context.description': '',
  forces: '',
  'init_state.description': '',
  'solution_layer.category': '',
  'solution_layer.solutions': [patternSolutionReducerStructure],
  'feedback': [],
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
    if (Array.isArray(data[p])) {
      const children = []
      data[p].forEach(item => {
        const ids = p.split('.')
        const unflatItem = unflatten(item)
        let object = unflatItem
        ids.forEach(id => {
          object = object[id]
        })
        children.push(object)
        cur[prop] = children
      })
    }
    else {
      cur[prop] = data[p]
    }
  }
  return resultholder[''] || resultholder
};

export const flatten = (data) => {
  var result = {}
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      let l = 0
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
