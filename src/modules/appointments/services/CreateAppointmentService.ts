import { startOfHour } from 'date-fns';
// import { getCustomRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

import Appointment from '../infra/typeorm/entities/Appointment';
// import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ provider_id, date }: IRequest): Promise<Appointment> {
    // const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate)
      throw new AppError('This appointment is already booked!');

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    // await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
