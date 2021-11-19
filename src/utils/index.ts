export const trottle = (fn: () => void, wate: number) => {
    let prev = 0;
    let timer: any = null;
    let ctx = this;
    return function proxy(...args: []) {
        let curT = new Date().getTime() - prev;
        if (curT > wate) {
            clearTimeout(timer);
            fn.call(ctx, ...args);
            prev = new Date().getTime();
        } else if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                fn.call(ctx, ...args);
                prev = new Date().getTime();
                timer = null;
            }, wate);
        }
    }
}