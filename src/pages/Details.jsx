import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { CountryDetails } from '../features/countryDetails/CountryDetails';

export const Details = () => {

    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back to main
            </Button>
            <CountryDetails name={name} navigate={navigate} />
        </div>
    )
};