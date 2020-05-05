import { Typed } from 'aos4n-core';
import { NotNull } from 'aos4n-web';

export class IndexIM {
    @NotNull()
    @Typed
    id: number
    @Typed
    name: string
}