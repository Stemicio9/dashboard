import { DatoreLayoutModule } from './datore-layout.module';

describe('DatoreLayoutModule', () => {
  let datoreLayoutModule: DatoreLayoutModule;

  beforeEach(() => {
    datoreLayoutModule = new DatoreLayoutModule();
  });

  it('should create an instance', () => {
    expect(datoreLayoutModule).toBeTruthy();
  });
});
