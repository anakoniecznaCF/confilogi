import Form from '../../common/Form/Form';
//styles
import { Wrapper, FormWrapper, FormTitle, Status } from './OfferDetailForm.style';

const OfferDetailForm = ({ offer_name, status }) => {
  return (
    <Wrapper>
      <FormWrapper>
        <FormTitle>Aplikuj teraz!</FormTitle>
        <Status status={status}>{status}</Status>
        <Form
          careerDetail
          offer_name={offer_name}
          template={`${process.env.EMAILJS_TEMPLATE_APPLICATION}`}
        />
      </FormWrapper>
    </Wrapper>
  );
};

export default OfferDetailForm;
