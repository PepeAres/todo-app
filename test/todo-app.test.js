import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../todo-app.js';

let elem;
let elemRoot;

beforeEach(async ()=>{
  elem = await fixture(html`<todo-app></todo-app>`);
  elemRoot = elem.shadowRoot;
}); 
/*Cuando el usuario desea agregar un nuevo elemento */
describe('When the user wants add a new item', () => {
  /*Y el campo de nuevo elemento está vacío , Entonces no se debe agregar vacío */
  it('And new item field is empty , Then empty should not be added ', ()=>{
    const input = elemRoot.querySelector('[data-testid="newItem"]');
    const btn = elemRoot.querySelector('[data-testid="add"]');

    btn.click();

    expect(input.checkValidity()).to.be.false;
  });
/**A continuación, se debe agregar un nuevo elemento */
  it('then new item should be added', async()=>  {
    const input = elemRoot.querySelector('[data-testid="newItem"]');
    const btn = elemRoot.querySelector('[data-testid="add"]');

    input.value = "Cenar";
    btn.click();

    await elem.updataComplete;

    const li = elemRoot.querySelector('li');
    expect(li.textContent).to.equal('Cenar');
    //expect(elem.todos).to.have.property('length').to.equal(1);
  });
  
  it('A continuacion se agrega un botton', ()=>{
    const input = elemRoot.querySelector('[data-testid="newItem"]');
    const btn = elemRoot.querySelector('[data-testid="add"]');

    btn.click();

    
  });
  
});
