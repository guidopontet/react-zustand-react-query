import { useForm } from "react-hook-form";
import useStore from "../store";
import toast from "react-hot-toast";
import { Input, Typography, Button } from '@mui/material';

function BookingForm ({ hotel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addReservation = useStore((state) => state.addReservation);

  const onSubmit = (data) => {
    addReservation(hotel, data);
    toast.success('Reservation added successfully');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" {...register('startDate', { required: true })}></Input>
      {errors.startDate && (
        <Typography color="error">This field is required</Typography>
      )}

      <br />

      <Input type="date" {...register('endDate', { required: true })}></Input>
      {errors.endDate && (
        <Typography color="error">This field is required</Typography>
      )}

      <br />

      <Button type="submit" variant="contained" color="primary">
        Make reservation
      </Button>
    </form>
  )
}

export default BookingForm;