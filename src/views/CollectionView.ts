import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {
    console.log(collection.models);
  }

  abstract renderItem(model: T, parentElement: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    for (let model of this.collection.models) {
      const wrapperElement = document.createElement('div');
      this.renderItem(model, wrapperElement);
      templateElement.content.append(wrapperElement);
    }

    this.parent.append(templateElement.content);
  }
}
