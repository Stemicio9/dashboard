import { LavoratoreLayoutModule } from './lavoratore-layout.module';

describe('LavoratoreLayoutModule', () => {
  let lavoratoreLayoutModule: LavoratoreLayoutModule;

  beforeEach(() => {
    lavoratoreLayoutModule = new LavoratoreLayoutModule();
  });

  it('should create an instance', () => {
    expect(lavoratoreLayoutModule).toBeTruthy();
  });
});
