export class FilterValueConverter {
    toView(array, property, filterBy) {
        if ( filterBy === "" ) {
            return array;
        }

        return array.filter(value => {
            try {
                return value[property].search(new RegExp(filterBy, "i")) > -1;
            } catch (ex) {
                //Swallow bad regex
            }
            return false;
        });
    }
}