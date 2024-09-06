export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return formatter.format(date);
};
