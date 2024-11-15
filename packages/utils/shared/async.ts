export const isFunction = (value: any): value is Function => {
  return Boolean(value?.constructor && value.call && value.apply)
}

export const isPromise = (value: any): value is Promise<any> => {
  if (!value) return false
  if (!value.then) return false
  return isFunction(value.then)
}

export const tryit = <Args extends any[], Return>(
  func: (...args: Args) => Return,
) => {
  return (
    ...args: Args
  ): Return extends Promise<any>
    ? Promise<[Error, undefined] | [undefined, Awaited<Return>]>
    : [Error, undefined] | [undefined, Return] => {
    try {
      const result = func(...args)
      if (isPromise(result)) {
        return result
          .then((value) => [undefined, value])
          .catch((err) => [err, undefined]) as Return extends Promise<any>
          ? Promise<[Error, undefined] | [undefined, Awaited<Return>]>
          : [Error, undefined] | [undefined, Return]
      }
      return [undefined, result] as Return extends Promise<any>
        ? Promise<[Error, undefined] | [undefined, Awaited<Return>]>
        : [Error, undefined] | [undefined, Return]
    } catch (err) {
      return [err as any, undefined] as Return extends Promise<any>
        ? Promise<[Error, undefined] | [undefined, Awaited<Return>]>
        : [Error, undefined] | [undefined, Return]
    }
  }
}
