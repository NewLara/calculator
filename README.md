# Adventures Squared Travel Website

A travel website featuring a cruise drink package calculator and travel tips.

## 🌐 Live Website
**https://newlara.github.io/calculator**

## 🧪 Testing

### Option 1: Simple HTML Tests (No Setup Required)
Open `test.html` in your browser to run basic tests:
- Link validation
- Calculator element checks
- Responsive design verification

### Option 2: Playwright E2E Tests (Recommended)

#### Setup:
```bash
# Install dependencies
npm install

# Install browsers
npm run install-browsers
```

#### Run Tests:
```bash
# Run all tests
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in debug mode
npm run test:debug
```

#### What Tests Cover:
- ✅ Homepage loading
- ✅ Calculator functionality
- ✅ Navigation
- ✅ Responsive design
- ✅ External links
- ✅ Blog section
- ✅ Affiliate disclosures

## 🚀 Features

### Calculator
- Cruise drink package cost comparison
- Pay-as-you-go vs package analysis
- Group cost calculator
- Real-time calculations

### Content
- Travel blog posts
- Tech-focused travel tips
- YouTube channel integration
- Affiliate link management

### Technical
- Responsive design
- Mobile-friendly
- Fast loading
- SEO optimized

## 📝 Manual Testing Checklist

### Calculator Tests:
- [ ] Change cruise length - calculations update
- [ ] Modify drink quantities - totals change
- [ ] Adjust discount percentage - savings update
- [ ] Test group calculator - add people, check totals
- [ ] Verify savings show in green/red colors

### Link Tests:
- [ ] YouTube channel link works
- [ ] Navigation links scroll to sections
- [ ] External links open correctly
- [ ] Affiliate links have disclosures

### Responsive Tests:
- [ ] Mobile viewport displays correctly
- [ ] Desktop viewport displays correctly
- [ ] Calculator works on mobile
- [ ] Navigation works on mobile

## 🛠️ Development

### File Structure:
```
calculator/
├── index.html          # Main website
├── test.html          # Simple test runner
├── tests/             # Playwright tests
│   └── calculator.spec.js
├── package.json       # Dependencies
├── playwright.config.js # Test configuration
└── README.md          # This file
```

### Making Changes:
1. Edit `index.html`
2. Test with `test.html` (simple)
3. Run `npm test` (comprehensive)
4. Commit and push to GitHub

## 📊 Analytics & SEO

The website includes:
- Meta descriptions
- Open Graph tags
- Structured data
- Mobile optimization
- Fast loading times

## 💰 Monetization

Ready for affiliate programs:
- Amazon Associates
- Travel booking sites
- Cruise line partnerships
- Travel insurance
- Tech product reviews

## 🔗 Links

- **Website:** https://newlara.github.io/calculator
- **GitHub:** https://github.com/NewLara/calculator
- **YouTube:** https://www.youtube.com/@AdventuresSquaredTravel

---

Built with ❤️ for travel enthusiasts and tech-savvy adventurers! 