export class LimitToValueConverter {
    toView(str, limit) {
        let len = str.length;
        let substr = str.substring(0, limit);
        if ( len > substr.length ) {
            substr += " ...";
        }
        return substr;
    }
}