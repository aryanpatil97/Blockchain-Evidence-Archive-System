# Contributing to BEAS

Thank you for your interest in contributing to the Blockchain Evidence Archive System (BEAS)! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### **Ways to Contribute**
- 🐛 **Bug Reports**: Report bugs and issues
- 💡 **Feature Requests**: Suggest new features
- 📝 **Documentation**: Improve documentation
- 🔧 **Code Contributions**: Submit code improvements
- 🧪 **Testing**: Help test the application

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- Git
- MetaMask browser extension
- Basic knowledge of blockchain and web development

### **Development Setup**

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Blockchain-Evidence-Archive-System.git
   cd Blockchain-Evidence-Archive-System
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Development Environment**
   ```bash
   # Copy configuration template
   cp public/config.js.example public/config.js
   
   # Update with your API keys
   # Edit public/config.js with your Pinata credentials
   ```

4. **Start Development Server**
   ```bash
   npm start
   ```

## 📋 Contribution Guidelines

### **Code Style**
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing code structure

### **Commit Messages**
Use clear, descriptive commit messages:
```bash
# Good examples
git commit -m "feat: add evidence preview functionality"
git commit -m "fix: resolve IPFS upload timeout issue"
git commit -m "docs: update installation instructions"

# Bad examples
git commit -m "fix"
git commit -m "update stuff"
```

### **Pull Request Process**

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Write clean, well-documented code
   - Add tests if applicable
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   # Run any existing tests
   npm test
   
   # Test manually in browser
   # Ensure all functionality works as expected
   ```

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: your descriptive message"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to GitHub and create a pull request
   - Provide a clear description of your changes
   - Reference any related issues

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### **Bug Report Template**
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Environment**
- OS: [e.g. Windows 10, macOS 11]
- Browser: [e.g. Chrome 91, Firefox 89]
- Node.js: [e.g. v16.0.0]

**Additional Context**
Any other context about the problem.
```

## 💡 Feature Requests

When suggesting features, please include:

- **Feature Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Proposed Implementation**: How you think it could be implemented
- **Alternatives**: Any alternative solutions you've considered

## 🔧 Development Guidelines

### **Frontend Development**
- Use semantic HTML5 elements
- Follow CSS best practices
- Ensure responsive design
- Test across different browsers
- Maintain accessibility standards

### **Smart Contract Development**
- Follow Solidity best practices
- Add comprehensive comments
- Include events for important actions
- Test thoroughly before deployment
- Consider gas optimization

### **IPFS Integration**
- Handle file upload errors gracefully
- Implement proper file validation
- Consider file size limitations
- Add progress indicators for uploads

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] User registration and login
- [ ] Evidence upload and storage
- [ ] Evidence verification
- [ ] Search and filtering
- [ ] Responsive design
- [ ] Cross-browser compatibility

### **Testing Scenarios**
1. **Happy Path**: Normal user flow
2. **Error Handling**: Network failures, invalid inputs
3. **Edge Cases**: Large files, special characters
4. **Security**: Unauthorized access attempts

## 📝 Documentation

### **Code Documentation**
- Add JSDoc comments for functions
- Include inline comments for complex logic
- Update README for new features
- Maintain API documentation

### **User Documentation**
- Update user guides for new features
- Add screenshots for UI changes
- Keep installation instructions current
- Document configuration options

## 🏷️ Issue Labels

We use the following labels for issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested

## 🎯 Project Roadmap

### **Current Priorities**
1. Bug fixes and stability improvements
2. Performance optimizations
3. Enhanced security features
4. Mobile responsiveness improvements

### **Future Features**
1. Advanced search capabilities
2. Evidence chain of custody
3. Multi-organization support
4. API for third-party integrations

## 💬 Communication

### **Getting Help**
- Create an issue for questions
- Use GitHub Discussions for general discussions
- Email aryanpatil97@gmail.com for urgent matters

### **Community Guidelines**
- Be respectful and inclusive
- Help others when possible
- Provide constructive feedback
- Follow the code of conduct

## 📄 License

By contributing to BEAS, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to BEAS! 🚀
