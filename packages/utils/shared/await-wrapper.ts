/**
 * await 包装函数
 * @param promise - promise对象
 * @returns 包装结果的数组
 */
export const awaitWrapper = async <T>(promise: Promise<T>) => {
  try {
    const v = await promise
    return [null, v] as const
  } catch (e) {
    return [e, null] as const
  }
}
