import { Sorter } from './Sort';
import { NumberCollection } from './NumbersCollection';
import { CharactorsCollection } from './CharactorsCollection';
import { LinkedList } from './LinkerList';

// const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const numberCollection = new CharactorsCollection('Kieu Minh Ha');
// const sorter = new Sorter(numberCollection);
const linkedList = new LinkedList();
linkedList.add(20);
linkedList.add(10);
linkedList.add(30);
linkedList.add(5);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
