import { assertNotNullorUndefined } from './assertion-concerns';

describe('assertion-concerns', () => {
    describe('assertNotNullorUndefined', () => {
        it('should throw exception for null', () => {
            expect(() =>
                assertNotNullorUndefined(null, 'can not be null'))
                .toThrowError('can not be null');
        });

        it('should throw exception for undefined', () => {
            expect(() =>
                assertNotNullorUndefined(undefined, 'can not be undefined'))
                .toThrowError('can not be undefined');
        });
    });
});
