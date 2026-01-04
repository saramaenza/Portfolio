function NavbarLink({ href, sectionId, children, onClick }) {
  return (
    <a
      href={href}
      className="relative overflow-hidden h-6 group"
      onClick={(e) => onClick(e, sectionId)}
    >
      <span className="block group-hover:-translate-y-full transition-transform duration-300">{children}</span>
      <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{children}</span>
    </a>
  );
}

export default NavbarLink;