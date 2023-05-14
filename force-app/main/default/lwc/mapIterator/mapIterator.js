import { api, LightningElement } from 'lwc';

export default class MapIterator extends LightningElement {
    _objMap;
    values;

    @api get objMap() {
        return this._objMap;
    }

    set objMap(value) {
        this._objMap=value;
        if (this._objMap) {
            this.values=[];
            for (let key in this._objMap) {
                this.values.push(this._objMap[key]);
            }
        }
    }
}