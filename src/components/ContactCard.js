import PropTypes from 'prop-types';

function ContactCard({ photo, city, email, phone }) {
    return (
        <div className="mx-auto mb-3 md:mt-0 max-w-xs rounded-xl text-neutral-700 shadow-lg text-md md:text-lg 2xl:text-xl font-quicksand bg-white border border-neutral-600 p-6 flex flex-col items-center gap-3">
            <img src={photo} alt="Sara Maenza" className="w-25 h-25 md:w-32 md:h-32 rounded-full object-cover border border-neutral-600 -translate-y-2/3 md:-translate-y-1/2 md:z-10 shadow-xl bg-white relative"/>
            <div className="-mt-14 flex flex-col items-center gap-2">
            <p className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-carnation">location_on</span>
                {city}
            </p>
            <a
                href={`mailto:${email}`}
                className="relative flex items-center justify-center gap-2 text-neutral-600 transition-colors duration-300 hover:text-carnation group"
            >
                <span className="material-symbols-outlined text-carnation transition-transform duration-300 group-hover:scale-125">
                email
                </span>
                <span className="relative">
                {email}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-linear-to-r from-carnation to-carnation transition-all duration-300 group-hover:w-full"></span>
                </span>
            </a>
            <p className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-carnation">call</span>
                {phone}
            </p>
            </div>
        </div>
    );
}

ContactCard.propTypes = {
    photo: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

ContactCard.defaultProps = {
    photo: '',
    city: '',
    email: '',
    phone: '',
};

export default ContactCard;