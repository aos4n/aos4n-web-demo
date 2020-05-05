import { Controller, GetMapping, UseExceptionFilter } from 'aos4n-web';

import { MyExceptionFilter } from '../filter/MyExceptionFilter';

@Controller('')
export class HomeController {
    @UseExceptionFilter(MyExceptionFilter)
    @GetMapping('')
    index() {
        return '这是一个aos4n-web演示程序'
    }
}