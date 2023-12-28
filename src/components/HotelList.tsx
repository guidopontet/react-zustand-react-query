import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';

const fetchHotels = async () => {
  const response = await fetch('http://localhost:3001/hotels');
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
};

function HotelList() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({ queryKey: ['hotels'], queryFn: fetchHotels });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Hotels
      </Typography>

      <Stack spacing={2}>
        {hotels.map((hotel) => (
          <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#e8e8e8' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={hotel.image}
                title={hotel.name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">See details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default HotelList;
