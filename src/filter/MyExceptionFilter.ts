import {
    ExceptionFilter, ExceptionHandler, IllegalActionArgumentException, IllegalArgumentException
} from 'aos4n-web';

@ExceptionFilter
export class MyExceptionFilter {
    @ExceptionHandler(IllegalActionArgumentException)
    async handleIllegalActionArgumentException(ctx: any, ex: IllegalActionArgumentException) {
        ctx.body = ex.message + `，参数序号：${ex.index}`
    }

    @ExceptionHandler(IllegalArgumentException)
    async handleIllegalArgumentException(ctx: any, ex: IllegalArgumentException) {
        ctx.body = ex.message + `，字段名：${ex.fieldName}`
    }

    @ExceptionHandler(Error)
    async handleError(ctx: any, error: Error) {
        console.error(error.stack)
        ctx.body = '服务器错误'
    }
}