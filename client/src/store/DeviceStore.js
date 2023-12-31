import { makeAutoObservable } from 'mobx';


export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'холодильники' },
      { id: 2, name: 'смартфоны' },
      { id: 3, name: 'ноутбуки' },
      { id: 4, name: 'телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
      { id: 5, name: 'HP' },
    ];

    this._devices = [
      { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 7, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
    ];

    this._selectedBrand = {};
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
