import Button from '~/components/Button';
function MenuItem({ data, onClick }) {
    return (
        <div className="block py-[9px] pl-[18px] hover:bg-[#16182308]">
            <Button lefticon={data.icon} to={data.to} onClick={onClick} textmenuItem>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
