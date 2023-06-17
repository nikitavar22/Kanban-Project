function Footer() {
    return (
        <footer id="footer" className="h-[55px] md:flex items-center justify-between bg-[#0067A3] text-white text-[18px] hidden">
            <div className="tasks text-base flex justify-between w-[300px] ml-5">
                <h6>Active tasks: &lt;N&gt;</h6>
                <h6>Finished tasks: &lt;M&gt;</h6>
            </div>
            <h4 className="mr-5 text-base">Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</h4>
        </footer>
    );
}


export default Footer;