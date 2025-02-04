import css from './Create.module.css';
const Create = () => {
  const arr = [
    {
      id: 1,
      title: 'Сало',
    },
    { id: 2, title: 'вода' },
    { id: 3, title: 'Мясо' },
    { id: 4, title: 'Цукерки' },

    { id: 5, title: 'Чіпси' },
    { id: 6, title: 'Молоко' },
  ];

  return (
    <div>
      <ul className={css.list}>
        {arr.map(item => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Create;
