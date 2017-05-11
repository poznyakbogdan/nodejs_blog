describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://vk.com/');

    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('#index_login_button')).sendKeys('boga_pba@mail.ru');
    element(by.css('#index_pass')).sendKeys('stepkapopka');

    element(by.css('#index_login_button')).click();
    element(by.css('#index_fb')).click();

    expect(element(by.css('.left_label.inl_bl')).getText()).toEqual('Моя страница');

  });
});