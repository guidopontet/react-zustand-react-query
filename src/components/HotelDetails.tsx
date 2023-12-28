import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";

const fetchHotel = async (id) => {
  const response = await fetch(`http://localhost:3001/hotels/${id}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}

function HotelDetails() {
  const [ match, params ] = useRoute('/hotels/:id');

  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['hotel', params?.id],
    queryFn: () => fetchHotel(params?.id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#e8e8e8'}}>
      <CardMedia sx={{ height: 140 }} image={hotel.image} title={hotel.name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hotel.description}
        </Typography>
      </CardContent>

      <CardActions>
        {/* CardActions */}
      </CardActions>
    </Card>
  );
}

export default HotelDetails;
