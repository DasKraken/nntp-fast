export const ENOENT = 'ENOENT';
export const EBADF = 'EBADF';
export const EINVAL = 'EINVAL';
export const EPERM = 'EPERM';
export const EPROTO = 'EPROTO';
export const EEXIST = 'EEXIST';
export const ENOTDIR = 'ENOTDIR';
export const EMFILE = 'EMFILE';
export const EACCES = 'EACCES';
export const EISDIR = 'EISDIR';
export const ENOTEMPTY = 'ENOTEMPTY';
export const ENOSYS = 'ENOSYS';
function formatError(errorCode: string, func = '', path = '', path2 = '') {
    let pathFormatted = '';
    if (path) pathFormatted = ` '${path}'`;
    if (path2) pathFormatted += ` -> '${path2}'`;

    switch (errorCode) {
        case ENOENT:
            return `ENOENT: no such file or directory, ${func}${pathFormatted}`;
        case EBADF:
            return `EBADF: bad file descriptor, ${func}${pathFormatted}`;
        case EINVAL:
            return `EINVAL: invalid argument, ${func}${pathFormatted}`;
        case EPERM:
            return `EPERM: operation not permitted, ${func}${pathFormatted}`;
        case EPROTO:
            return `EPROTO: protocol error, ${func}${pathFormatted}`;
        case EEXIST:
            return `EEXIST: file already exists, ${func}${pathFormatted}`;
        case ENOTDIR:
            return `ENOTDIR: not a directory, ${func}${pathFormatted}`;
        case EISDIR:
            return `EISDIR: illegal operation on a directory, ${func}${pathFormatted}`;
        case EACCES:
            return `EACCES: permission denied, ${func}${pathFormatted}`;
        case ENOTEMPTY:
            return `ENOTEMPTY: directory not empty, ${func}${pathFormatted}`;
        case EMFILE:
            return `EMFILE: too many open files, ${func}${pathFormatted}`;
        case ENOSYS:
            return `ENOSYS: function not implemented, ${func}${pathFormatted}`;
        default:
            return `${errorCode}: error occurred, ${func}${pathFormatted}`;
    }
}

export function createError(errorCode: string, func = '', path = '', path2 = '') {
    const error = new Error(formatError(errorCode, func, path, path2));
    (error as any).code = errorCode;
    return error;
}