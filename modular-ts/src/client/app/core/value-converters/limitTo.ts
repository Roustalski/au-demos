export class LimitToValueConverter {
    toView(str: string, limit: number): string {
        let len: number = str.length;
        let substr: string = str.substring(0, limit);
        if ( len > substr.length ) {
            substr += " ...";
        }
        return substr;
    }
}