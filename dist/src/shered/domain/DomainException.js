"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    constructor(message = 'Exceção de dominio generica') {
        super(message);
        this.name = 'DomainException';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=DomainException.js.map