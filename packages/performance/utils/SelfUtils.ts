/**
 * 获取node环境的Global或浏览器环境的windows
 */
export const getContext = () => {
    return self;
}