import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CourtsService } from './courts.service';

describe('CourtsService', () => {
  let service: CourtsService;

  const prismaMock = {
    court: { findUnique: jest.fn() },
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CourtsService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = moduleRef.get(CourtsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns the court when found', async () => {
    prismaMock.court.findUnique.mockResolvedValue({ id: 'x', name: 'Campo 1' });

    const result = await service.findOne('x');

    expect(result.name).toBe('Campo 1');
    expect(prismaMock.court.findUnique).toHaveBeenCalledWith({
      where: { id: 'x' },
    });
  });

  it('throws NotFoundException when missing', async () => {
    prismaMock.court.findUnique.mockResolvedValue(null);

    await expect(service.findOne('court-123')).rejects.toThrow(
      NotFoundException,
    );
    await expect(service.findOne('court-123')).rejects.toThrow('court-123');
  });
});
