'use strict';
/**
 * Fecha de referencia para cuando se quiere indicar una fecha vacia
 */
export const ReferenceDate = new Date(1900, 1, 1, 0, 0, 0, 0);
/**
 * Utilidades generales para instancias
 *
 * @export
 */
export class UtilHelper {
  /**
   * Devuelve si el valor esta definido o no
   */
  static isDefined(value) {
    return typeof value !== 'undefined';
  }
  /**
   * Devuelve si el valor es un string
   */
  static isString(value) {
    return typeof value === 'string';
  }
  /**
   * Devuelve si el valor es un numero
   */
  static isNumber(value) {
    return typeof value === 'number';
  }
  /**
   * Devuelve si el valor es un string pero con valor vacio o nulo
   */
  static isNullOrEmpty(data) {
    return !(
      UtilHelper.isDefined(data) &&
      data !== null &&
      UtilHelper.isString(data) &&
      data.trim().length > 0
    );
  }
  /**
   * Devuelve si es un objecto sin propiedades
   */
  static isEmptyObject(value) {
    return Object.getOwnPropertyNames(value).length === 0;
  }
  /**
   * Devuelve si es un valor definido y no nulo
   */
  static exist(data) {
    return UtilHelper.isDefined(data) && data !== null;
  }
  /**
   * Devuelve si el valor es un array, pudiendo indicar si tiene que tener datos o no
   */
  static existArray(data, withData = false) {
    return (
      UtilHelper.isDefined(data) &&
      data !== null &&
      Array.isArray(data) &&
      (!withData || data.length > 0)
    );
  }
  /**
   * Devuelve si el valor es un string relleno
   */
  static existString(data) {
    return !UtilHelper.isNullOrEmpty(data);
  }
  /**
   * Devuelve si el valor es un valor numerico finito
   */
  static isFinite(data) {
    return UtilHelper.exist(data) && UtilHelper.isNumber(data) && Number.isFinite(data);
  }
}
