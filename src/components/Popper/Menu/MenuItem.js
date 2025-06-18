import Button from '~/components/Button';
function MenuItem({ data, onClick }) {
    return (
        <div
            className={`block py-[9px] pl-[18px] text-[#161823] hover:bg-[#16182308] ${
                data.separate ? 'border-t-[1px] border-solid border-[#1618231f]' : ''
            }`}
        >
            <Button leftIcon={data.icon} to={data.to} onClick={onClick} textMenuItem>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
