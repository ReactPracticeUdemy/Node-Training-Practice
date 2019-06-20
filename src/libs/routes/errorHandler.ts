export const errorHandler = (err, req, res, next) => {
  const error = {
    error: 'Not Found',
    message: err.message || 'error',
    status: err.status || 500,
    timestamp: '2019-01-08T17:38:21.929Z',
  };

  res.send(error);
};
