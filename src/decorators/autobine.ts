// autobind decorator

export function Autobind(_target: any, _methodName: string, descriptor: TypedPropertyDescriptor<any> ): TypedPropertyDescriptor<any>{
    const originalMethod = descriptor.value;
    const adjMethod: TypedPropertyDescriptor< ()=> void> = {
        configurable: true,
        enumerable: false,
        get(){
            const returnFn = originalMethod.bind(this);
            return returnFn;
        }
    }
    return adjMethod;

}
