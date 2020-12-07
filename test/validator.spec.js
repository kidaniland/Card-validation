// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    test('debería retornar true para "5592022120486706"', () => {
      expect(validator.isValid("5592022120486706")).toBe(true);
    });
    test('debería retornar true para "5592022120486700"', () => {
      expect(validator.isValid("5592022120486700")).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    test('Debería retornar "############6706" para "5592022120486706"', () => {
      expect(validator.maskify("5592022120486706")).toBe("############6706")
    });
  });
});
