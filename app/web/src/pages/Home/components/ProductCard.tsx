import React from 'react'
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import { Product } from '../../../types'
import { Link } from 'react-router-dom'
type Props = {
  product: Product
}

export default function ProductCard({
  product: { image, title, url, price, originWebsite }
}: Props) {
  if (!image) return null
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      p={2}
      item
      md={8}
      xs={12}
      elevation={10}
      component={Paper}
    >
      <Paper
        sx={{
          width: '30%',
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#FFF',
          borderRadius: '10px'
        }}
        elevation={2}
      >
        <Box
          component="img"
          src={image}
          sx={{ maxWidth: '128px', maxHeight: '128px' }}
        />
      </Paper>
      <Stack sx={{ width: '45%' }} ml={2}>
        <Typography>{title}</Typography>
        <Typography>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Typography>
        <Typography>{originWebsite}</Typography>
      </Stack>
      <Stack sx={{ width: '25%' }}>
        <Button
          component={Link}
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
          variant="contained"
        >
          Ir a Web
        </Button>
      </Stack>
    </Grid>
  )
}