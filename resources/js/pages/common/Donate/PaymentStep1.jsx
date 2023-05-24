import { Link } from '@inertiajs/react';
import Button from '@/components/common/Button/Button';
import PaymentSelect from '@/components/common/PaymentSelect/PaymentSelect';

const PaymentStep1 = ({ handleNextStep }) => {
    return (
        <>
            <div className="payment-main">
                <p>Please select a payment method</p>
                <PaymentSelect />
            </div>
            <div className="link-wrapper">
                <Button title="Continue" type="primary" onClick={handleNextStep} arrow />
                <br />
                <Link href="/">Can't find your payment method?</Link>
            </div>
        </>
    );
};

export default PaymentStep1;
