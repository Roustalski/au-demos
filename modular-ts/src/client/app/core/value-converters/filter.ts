export class FilterValueConverter {
    toView(array: Array<any>, property: string, filterBy: string): Array<any> {
        if ( filterBy === "" ) {
            return array;
        }

        return array.filter((value: Object) => {
            try {
                return value[property].search(new RegExp(filterBy, "i")) > -1;
            } catch (ex) {
                //Swallow bad regex
            }
            return false;
        });
    }
}