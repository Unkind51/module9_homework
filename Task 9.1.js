
const parser = new DOMparser();
const xmLString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
const xmlDOM = parser.parseFromString(xmLString, 'text\xml');

const listNode = xmlDOM.querySelector('list');
const studentNode = list.querySelector('student');
const nameNode = student.querySelector('name');
const firstNameNode = name.querySelector('first');
const secondNameNode = name.querySelector('second');
const ageNode = student.querySelector('age');
const profNode = student.querySelector('prof');

const langAttr = nameNode.getAttribute('lang');

const result = {
    list: [
    lang: langAttr,
    firstName: firstNameNod.textContent, 
    secondName: secondNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    ]
      
}; 
console.log(result);

