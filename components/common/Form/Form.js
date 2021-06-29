import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
//styles
import * as Style from './Form.style';

const Form = ({ template, contact, careerDetail, offer_name }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState();

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(messageTimer);
  });

  const formSubmitHandler = (data, e) => {
    emailjs
      .sendForm(
        `${process.env.EMAILJS_SERVICE_ID}`,
        template,
        e.target,
        `${process.env.EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Wiadomość wysłana!');
          reset({ form_title: '' });
        },
        (error) => {
          console.log(error.text);
          setMessage('Coś poszło nie tak.. Spróbuj jeszcze raz!');
        }
      );
  };

  return (
    <>
      <Style.Message error={message === 'Coś poszło nie tak.. Spróbuj jeszcze raz!'}>
        {message}
      </Style.Message>
      <Style.StyledForm onSubmit={handleSubmit(formSubmitHandler)} id='contact-form'>
        {offer_name && <Style.InvisibleInput readOnly name='offer_name' value={offer_name} />}
        {contact && (
          <Style.InputGroup select>
            <Style.Label htmlFor='subject'>Wybierz temat:</Style.Label>
            <Style.Select
              required
              defaultValue=''
              id='subject'
              name='form_title'
              {...register('form_title', { required: true })}
              error={errors.form_title}
            >
              <Style.Option value='' disabled>
                Wybierz temat:
              </Style.Option>
              <Style.Option value='Chcę z Wami pracować'>Chcę z Wami pracować</Style.Option>
              <Style.Option value='Chcę podzielić się swoją opinią'>
                Chcę podzielić się swoją opinią
              </Style.Option>
              <Style.Option value='Chcę zadać pytanie'>Chcę zadać pytanie</Style.Option>
            </Style.Select>
            {errors.form_title && (
              <Style.ErrorText role='alert'>To pole jest wymagane</Style.ErrorText>
            )}
          </Style.InputGroup>
        )}

        <Style.InputGroup>
          <Style.Label htmlFor='name'>Imię i nazwisko</Style.Label>
          <Style.TextInput
            type='text'
            id='name'
            name='from_name'
            {...register('from_name', { required: true, pattern: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/ })}
            placeholder='Imię i nazwisko:'
            error={errors.from_name}
          />
          {errors.from_name && errors.from_name.type === 'required' && (
            <Style.ErrorText role='alert'>To pole jest wymagane</Style.ErrorText>
          )}
          {errors.from_name && errors.from_name.type === 'pattern' && (
            <Style.ErrorText role='alert'>Wpisz poprawnie imię i nazwisko</Style.ErrorText>
          )}
        </Style.InputGroup>

        <Style.InputGroup>
          <Style.Label htmlFor='telephone'>Telefon</Style.Label>
          <Style.TextInput
            type='text'
            id='telephone'
            name='phone_number'
            {...register('phone_number', { required: true, maxLength: 9, minLength: 7 })}
            placeholder='Telefon:'
            error={errors.phone_number}
          />
          {errors.phone_number && errors.phone_number.type === 'required' && (
            <Style.ErrorText role='alert'>To pole jest wymagane</Style.ErrorText>
          )}
          {errors.phone_number && errors.phone_number.type === 'maxLength' && (
            <Style.ErrorText role='alert'>Wpisz poprawnie numer telefonu</Style.ErrorText>
          )}
        </Style.InputGroup>

        <Style.InputGroup>
          <Style.Label htmlFor='e-mail'>E-mail</Style.Label>
          <Style.TextInput
            type='email'
            id='e-mail'
            name='email_address'
            {...register('email_address', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            placeholder='Email:'
            error={errors.email_address}
          />
          {errors.email_address && errors.email_address.type === 'required' && (
            <Style.ErrorText role='alert'>To pole jest wymagane</Style.ErrorText>
          )}
          {errors.email_address && errors.email_address.type === 'pattern' && (
            <Style.ErrorText role='alert'>Wpisz poprawnie e-mail</Style.ErrorText>
          )}
        </Style.InputGroup>

        <Style.InputGroup textarea>
          <Style.Label htmlFor='message'>Treść wiadomości</Style.Label>
          <Style.MessageTextarea
            id='message'
            name='text_message'
            {...register('text_message', { required: true })}
            placeholder='Treść wiadomości:'
            rows='6'
            error={errors.text_message}
          />
          {errors.text_message && (
            <Style.ErrorText role='alert'>To pole jest wymagane</Style.ErrorText>
          )}
        </Style.InputGroup>

        {careerDetail && (
          <Style.InputGroup>
            <Style.Label htmlFor='refferal'>E-mail</Style.Label>
            <Style.TextInput
              type='text'
              id='refferal'
              name='refferal'
              {...register('refferal')}
              placeholder='Osoba polecająca:'
            />
          </Style.InputGroup>
        )}

        <Style.FileInputWrapper>
          <Style.FileWrapText>Załącznik:</Style.FileWrapText>
          <Style.FileInput
            type='file'
            id='attachment'
            name='attachment'
            accept='image/png, image/jpeg, .pdf'
            {...register('attachment', { required: contact ? false : true })}
            error={contact ? errors.cv : null}
          />
          {errors.attachment && (
            <Style.ErrorText role='alert'>Nie wybrano żadnego pliku</Style.ErrorText>
          )}
        </Style.FileInputWrapper>

        <Style.SubmitButton type='submit'>Aplikuj</Style.SubmitButton>
      </Style.StyledForm>
    </>
  );
};

export default Form;
