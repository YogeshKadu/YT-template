import { TestBed } from '@angular/core/testing';

import { YTRequestService } from './yt-request.service';

describe('YTRequestService', () => {
  let service: YTRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YTRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
